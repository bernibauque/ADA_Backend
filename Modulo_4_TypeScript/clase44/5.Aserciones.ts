// Aserciones:
// Permiten "decirle" al compilador que tipo de datos debe asumir cuando no le puede
// inferir automaticamente, o cuando queremos especificar un tipo mas preciso

// Ejemplo 1: Asecion Basica de tipo "any" a "string"
let valorGenerico: any = "TypeScript es buenisimo";
// Queremos acceder a la long de string pero dado que "valorgenerico " es any
//Typescript no nos permite directamente acceder a propiedades especificas
// de los strings. Por lo tanto usamos una asercion de tipo para decirle al 
// compilador que esta variable es realmente un string en es contexto
let longitudString: number = (valorGenerico as string).length;
console.log(`La longitud del string es: ${longitudString}`);

console.log("---------------------------------------------------------");


// Ejemplo 2: Asercion de tipos de union
//Imaginemos que tenemos una funcion que puede recibir un nombre o valor nulo
function obtenerNombreEnMayusculas(nombre: string | null): string {
    //el compilador no sabe si nombre es un string o null, por lo tanto, debemos hacer una verificacion
    if (nombre) {
        //aqui, usando la sercion, le decimos a typescript que asuma que nombre es un string
        return (nombre as string).toUpperCase();
    } else {
        // si nombre es null, retornamos un mensaje
        return "Nombre no proporcionado"
    }
}

//Pruebas con distintos valores
console.log(obtenerNombreEnMayusculas("Sofi"));
console.log(obtenerNombreEnMayusculas(null));
console.log("---------------------------------------------------------");

// Ejemplo 3: Uso de aserciones con 'unknow'
// El tipo unkonow es similar a any, pero mas seguro. Debemos asegurarnos del tipo antes de usarlo
export let valorDesconocido: unknown = 'Este es un valor desconocido';

// No podemos acceder directamente a las propiedades de 'valorDesconocido; porque TS no sabe su tipo
// por eso, usamos aserciones de tipo (una vez que verificamos el tipo)
if (typeof valorDesconocido === "string") {
    let longitud: number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
}


