// Función básica que suma dos números
function sumar(a: number, b: number): number {
    return a + b;
  }
  
  // Función que muestra un mensaje (sin retorno)
  function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
  }
  
  // Función con parámetro opcional
  function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
      return `${saludo}, ${nombre}`;
    }
    return `Hola, ${nombre}`;
  }
  
  // Función con valor predeterminado
  function despedirse(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}`;
  }
  
  // Función que acepta un número variable de argumentos
  function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  // Función flecha para multiplicar dos números
  const multiplicar = (a: number, b: number): number => a * b;
  
  // Ejecución de las funciones
  let resultadoSuma = sumar(3, 4); // 7
  mostrarMensaje("Este es un mensaje en consola"); // Muestra el mensaje
  export let saludo = saludar("Ana", "¡Buenos días!"); // ¡Buenos días!, Ana
  let despedida = despedirse("Lucía"); // Adiós, Lucía
  let sumaTotal = sumarTodos(1, 2, 3, 4); // 10
  let resultadoMultiplicacion = multiplicar(5, 6); // 30
  
  // Mostrar los resultados en consola
  console.log(`Resultado de sumar: ${resultadoSuma}`);
  console.log(saludo);
  console.log(despedida);
  console.log(`Resultado de sumar todos: ${sumaTotal}`);
  console.log(`Resultado de multiplicar: ${resultadoMultiplicacion}`);
  


  
  

  
  