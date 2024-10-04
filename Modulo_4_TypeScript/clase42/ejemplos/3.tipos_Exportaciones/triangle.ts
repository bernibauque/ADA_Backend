// La función logCalculation no se exporta y es privada al módulo. 
// calculateTriangleArea y TRIANGLE_NAME se exportan directamente.

// Función privada no exportada
const logCalculation = (area: number) => {
    console.log(`Calculated area: ${area}`);
  };
  
  // Exportación directa de la función
  export const calculateTriangleArea = (base: number, height: number): number => {
    const area = (base * height) / 2;
    logCalculation(area); // Uso de la función privada
    return area;
  };
  
  export const TRIANGLE_NAME = 'Triangle';
  