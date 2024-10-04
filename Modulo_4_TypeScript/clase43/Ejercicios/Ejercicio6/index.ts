import { Pedido } from './pedido';
import { Pan } from './pan';

const pan1 = new Pan('Baguette', 50, 20);
const pan2 = new Pan('Croissant', 30, 5);

const pedido = new Pedido();
pedido.agregarPan(pan1, 10);  // Pedido dentro de lo disponible
pedido.agregarPan(pan2, 10);  // Pedido que supera el inventario disponible

console.log('Pedido actual:');
pedido.mostrarPedido();

const total = pedido.calcularTotalPedido();
console.log(`Total del pedido: $${total}`);
