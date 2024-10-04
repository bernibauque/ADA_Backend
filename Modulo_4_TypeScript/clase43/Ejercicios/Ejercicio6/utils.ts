import { Pan } from './pan';

// Función para calcular el precio total del pedido
export function calcularTotal(panes: { pan: Pan, cantidad: number }[]): number {
    return panes.reduce((total, p) => total + (p.pan.precio * p.cantidad), 0);  // Suma precio * cantidad
}
