// 1. any: Permite almacenar cualquier tipo de valor sin restricciones
let anyValue: any = "Hola, soy any";
console.log(anyValue);
anyValue = 42;
console.log(anyValue);
anyValue = {name: "TypeScript"} // ahora es un objeto
console.log(anyValue);
anyValue = null;
console.log(anyValue);

// 2. unknow: Similar a any pero requiere verificacion antes de su uso
let unknowValue: unknown = "Hola, soy unknown";
console.log(unknowValue);

// Necesitamos verificar el tipo antes de usarlos como un string
if (typeof unknowValue === "string") {
    console.log(unknowValue.toUpperCase());
}

// 3. void: se usa en funciones que no retornar valor
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Esto es una funcion void")

// 4. Never: Representa el tipo de funciones que nunca retornan
// como aquellas que arrojan errores o tambien tienen los bucles infinitos
function throwError(errorMsg: string): never{
    throw new Error(errorMsg)
};
//throw new Error es una expresion en js (y ts) que se utiliza para lanza una
// excepcion. Esta interrumpr la ejecucion normal del programa y se propaga hacia
// arriba en la pila de llamadas hasta que es manejada (usualmente un try catch)

// Si descomentan la linea de abajo, se arrojara un error
// y se detendra la ejecucion del programa
//throwError("Esto es un error y nunca retornara")

function infiniteLoop(): never {
    while (true) {
        console.log("Este bucle nunca termina");
    }
}
//Descomentar abajo para ver loop infinito
//infiniteLoop();

// 5. Null y Undefined: Representean la ausencia del valor
let nullValue: string | null = null // Puede ser cadena o null
console.log(nullValue);

nullValue = "Ahora tiene valor"
console.log(nullValue);

let undefinedValue: undefined = undefined // solo puede ser undefined
console.log(undefinedValue);

// Uso de todos en un solo contexto
function processData(value: any): void {
    if(typeof value === "string") {
        console.log("El valor es una cadena: ", value);
    } else if (typeof value === "number") {
        console.log("El valor es un numero: ", value);
    } else if (value === null || value === undefined) {
        console.log("El valor es null o undefined: ", value);
    } else {
        console.log("El valor es de otro tipo: ", value);
    }
}
processData("Texto");
processData(123);
processData(null);
processData({key: "valor"});
