// Crear un array de tuplas con los productos
let productos: [string, number, number][] = [
    ["Manzana", 10, 1.5],
    ["Pan", 20, 2.0],
    ["Leche", 5, 1.2]
  ];
  
  // Imprimir la información del segundo producto
  console.log(productos[1]);
  
  // Modificar la cantidad del tercer producto
  productos[2][1] = 8;
  
  // Mostrar el array actualizado
  console.log(productos);
  