// 2. Ejecución con cancelación (clearTimeout())
// Puedes asignar setTimeout() a una variable y luego cancelarlo antes de que se complete 
// el tiempo utilizando clearTimeout().

let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrará porque cancelaremos el temporizador.");
  }, 3000);
  
  clearTimeout(temporizador);  // Cancelamos el temporizador antes de los 3 segundos.
  
// Por lo tanto, este codigo no mostrará nada en la consola porque cancelamos el 
// temporizador (setTimeout()) antes de que se complete el tiempo de espera de 3 segundos.



