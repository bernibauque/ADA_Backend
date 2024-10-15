// Definición de una interfaz con propiedades de solo lectura "x" y "y"
interface Punto {
    readonly x: number;    // Propiedad de solo lectura
    readonly y: number;    // Propiedad de solo lectura
  }
  
  // Crear un objeto con las propiedades de solo lectura
  const punto: Punto = { x: 10, y: 20 };
  
  // Intentar modificar una propiedad de solo lectura causará un error
  // punto.x = 15;  // Error: No se puede reasignar una propiedad readonly
  
  console.log(punto); // { x: 10, y: 20 }

  

  