// Ejemplo de tipos primitivos en TypeScript

// 1. String (Cadena de texto)
let nombre1: string = "Berni Bauque";
let saludo: string = `Hola, ${nombre1}, bienvenida a TypeScript!`;
console.log(saludo);

// 2. number(Numeros: enteros, decimales, notacion cientifica)
let entero: number = 42;
let decimal: number = 3.14;
let cientificos: number = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Cientifico: ", cientificos);

// 3. boolean (Valores logicos: true y false)
let esProfesor: boolean = true;
let tieneTitulo: boolean = false;
console.log("Es profesor?: ", esProfesor);
console.log("Tiene titulo?: ", tieneTitulo);

// 4. null (Ausencia intencional de valor)
let valorNulo: null = null;
console.log("Valor Nulo: ", valorNulo);

// 5. Undefined (Valor no iniciado)
let valorIndefinido: undefined = undefined;
console.log("Valor Indefinido: ", valorIndefinido);

// 6. Symbol (Simbolo unico)
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");
console.log("Son simbolos unicos:", id1 === id2);








