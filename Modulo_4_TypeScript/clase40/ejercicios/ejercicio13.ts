// Declarar el enum
enum Clima {
    Soleado,
    Nublado,
    Lluvioso,
    Tormentoso
  }
  
  // Crear un array de estados del clima
  let estadosClima: Clima[] = [Clima.Soleado, Clima.Nublado, Clima.Lluvioso];
  
  // Recorrer el array e imprimir los valores
  estadosClima.forEach(clima => console.log(Clima[clima]));
  