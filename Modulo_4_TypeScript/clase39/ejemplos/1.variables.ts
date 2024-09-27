// Ejemplo de var: alcance y hoisting
function ejemploVar() {
    // @ts-ignore
    console.log(variableVar); // undefined por hoisting
    var variableVar = "Soy una variable var";
    console.log(variableVar); // "Soy una variable var"
}
ejemploVar();

// Ejemplo de let: alcance de bloque y sin hoisting
function ejemploLet() {
    // console.log(variableLet); // Error: Cannot access 'variableLet' before initialization
    let variableLet = "Soy una variable let";
    console.log(variableLet); // "Soy una variable let"
}
ejemploLet();

// Ejemplo de const: valor constante y alcance de bloque
function ejemploConst() {
    const variableConst = "Soy una variable const";
    console.log(variableConst); // "Soy una variable const"

    // variableConst = "Otro valor"; // Error: Assignment to constant variable.
}
ejemploConst();

// Con @ts-ignore, TypeScript ignorará ese error en particular y te permitirá demostrar 
// el concepto de hoisting. Este tipo de anotaciones son útiles cuando quieres mostrar 
// un comportamiento específico de JavaScript en TypeScript, que normalmente lo bloquearía 
// para proteger el código.




  
  
  

