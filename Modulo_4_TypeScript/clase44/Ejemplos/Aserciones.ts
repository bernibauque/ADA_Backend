// ======== Aserciones de Tipos en TypeScript ========
// Las aserciones permiten "decirle" al compilador qué tipo de dato debe
// asumir cuando no lo puede inferir automáticamente, o cuando queremos
// especificar un tipo más preciso.

// ======== Ejemplo 1: Aserción básica de tipo 'any' a 'string' ========

// Supongamos que tenemos una variable de tipo 'any', la cual puede contener cualquier valor.
let valorGenerico: any = "TypeScript es increíble";

// Queremos acceder a la longitud de este string, pero dado que 'valorGenerico' es 'any',
// TypeScript no nos permite directamente acceder a propiedades específicas de los strings.
// Por lo tanto, usamos una aserción de tipo para decirle al compilador que esta variable
// es realmente un string en este contexto.
let longitudDelString: number = (valorGenerico as string).length;

// Ahora podemos utilizar las propiedades del tipo 'string' sin errores de compilación.
console.log(`La longitud del string es: ${longitudDelString}`); // Salida: 23

// ======== Ejemplo 2: Aserciones con tipos de unión ========

// Imaginemos que tenemos una función que puede recibir un nombre o un valor nulo.
function obtenerNombreEnMayusculas(nombre: string | null): string {
    // El compilador no sabe si 'nombre' es un string o null, por lo tanto, debemos hacer una verificación.
    if (nombre) {
        // Aquí, usando una aserción, le decimos a TypeScript que asuma que 'nombre' es un string.
        return (nombre as string).toUpperCase();
    } else {
        // Si 'nombre' es null, retornamos un mensaje por defecto.
        return "Nombre no proporcionado";
    }
}

// Pruebas de la función con diferentes valores.
console.log(obtenerNombreEnMayusculas("Ana"));        // Salida: "ANA"
console.log(obtenerNombreEnMayusculas(null));         // Salida: "Nombre no proporcionado"

// ======== Ejemplo 3: Uso de aserciones con 'unknown' ========

// El tipo 'unknown' es similar a 'any', pero más seguro. Debemos asegurarnos del tipo antes de usarlo.
export let valorDesconocido: unknown = "Este es un valor desconocido";

// No podemos acceder directamente a las propiedades de 'valorDesconocido' porque TypeScript no sabe su tipo.
// console.log(valorDesconocido.length); // Error: no se puede acceder a 'length' en un tipo 'unknown'.

// Usamos aserciones de tipo una vez que hemos verificado el tipo.
if (typeof valorDesconocido === "string") {
    let longitud: number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);  // Salida: 27
}

// ======== Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles) ========

// A veces, podemos necesitar hacer una aserción "doble", especialmente cuando estamos tratando con
// conversiones entre tipos que no están directamente relacionados.
let valor: any = "Este es un valor";

// Si por alguna razón necesitamos tratar 'valor' como un número, primero lo podemos asertar como 'unknown',
// y luego convertirlo a 'number'. Esta práctica debe hacerse con precaución.
let valorNumerico = (valor as unknown as number);

// Aunque no tiene sentido en este caso específico, es útil cuando trabajamos con datos no tipados provenientes
// de APIs o bibliotecas externas donde necesitamos asegurarnos del tipo.
console.log(`Valor numérico (aserción doble): ${valorNumerico}`); // Salida: "Valor numérico (aserción doble): Este es un valor"

// ======== Ejemplo 5: Precauciones con las aserciones ========

// Aserciones de tipo incorrectas pueden llevar a errores en tiempo de ejecución.
// Aquí, estamos asertando que un número es un string, lo cual es incorrecto pero TypeScript no lo impedirá.
let valorErroneo: any = 42;
let textoErroneo = valorErroneo as string;  // Incorrecto, pero permitido por el compilador.

console.log(textoErroneo.length);  // Error en tiempo de ejecución: 'length' no existe en un número.




