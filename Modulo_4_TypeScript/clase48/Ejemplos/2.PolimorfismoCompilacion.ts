// Este ejemplo presenta una función que procesa diferentes tipos de pedidos de clientes, 
// permitiendo usar la misma función con diferentes estructuras de datos.

// Firmas de sobrecarga: la función procesa diferentes tipos de pedidos
function procesarPedido(pedidoId: number): string;                 // Pedido por ID
function procesarPedido(cliente: string, producto: string): string; // Pedido con detalles de cliente y producto

// Implementación de la función
function procesarPedido(param1: number | string, param2?: string): string {
  if (typeof param1 === "number") {
    // Caso: Pedido realizado con un ID
    return `Procesando pedido con ID: ${param1}`;
  } else if (typeof param1 === "string" && param2) {
    // Caso: Pedido realizado con nombre del cliente y producto
    return `Procesando pedido para ${param1}, producto: ${param2}`;
  } else {
    throw new Error("Parámetros no válidos.");
  }
}

// Ejemplos de uso
console.log(procesarPedido(123)); // "Procesando pedido con ID: 123"
console.log(procesarPedido("Ana", "Laptop")); // "Procesando pedido para Ana, producto: Laptop"

// Firmas de sobrecarga: La función procesarPedido tiene dos firmas posibles:

// Una recibe un número (pedidoId).
// Otra recibe dos cadenas de texto (cliente y producto).

// Implementación unificada: Usamos un único cuerpo de función que maneja los dos casos posibles 
// utilizando verificaciones con typeof y validaciones adicionales.

// Validación en tiempo de compilación: Si se intenta llamar a la función con una combinación 
// de parámetros que no coincida con ninguna firma declarada, TypeScript generará un error. 
// Esto ayuda a prevenir errores antes de que el código se ejecute.

