// Firmas de sobrecarga: la funcion procesa diferentes tipos de datos
function procesarPedido(pedidoId: number): string;  // Pedido por Id
function procesarPedido(cliente: string, producto: string): string;  // Pedido con detalles de cliente y producto

// Implementacion de la funcion
function procesarPedido(param1: number | string, param2?: string): string {
    if (typeof param1 === "number") {
        // Caso Pedido realizado con un ID
        return `Procesando pedido con ID: ${param1}`
} else if (typeof param1 === "string" && param2) {
    // Caso: pedido realizado con nombre del cliente y producto
    return`Procesando pedido para ${param1}, producto: ${param2}`;
} else{
    return `Algo salio mal`
}
}

// Ejemplo de uso
console.log(procesarPedido(123));
console.log(procesarPedido("Sofi", "Notebook"));




