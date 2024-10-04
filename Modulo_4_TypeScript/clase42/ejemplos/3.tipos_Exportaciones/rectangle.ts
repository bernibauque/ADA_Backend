// Declaramos primero las funciones y constantes, 
// y luego las exportamos al final del archivo utilizando la exportación separada.

const calculateRectangleArea = (width: number, height: number): number => {
    return width * height;
  };
  
  const RECTANGLE_NAME = 'Rectangle';
  
  // Exportación separada
  export { calculateRectangleArea, RECTANGLE_NAME };


  