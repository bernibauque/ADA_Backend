import { Pan } from './pan';
import { calcularTotal } from './utils';

// Clase Pedido que maneja la compra de diferentes panes
export class Pedido {
    private panes: { pan: Pan, cantidad: number }[] = [];  // Array para almacenar panes y sus cantidades

    agregarPan(pan: Pan, cantidad: number): void {
        if (cantidad <= pan.cantidadDisponible) {
            this.panes.push({ pan, cantidad });
            pan.descontar(cantidad); // Actualiza el stock de panes
        } else {
            // Si la cantidad solicitada excede la disponible, ajustar el pedido
            console.log(`No hay suficiente cantidad de ${pan.tipo}. Se ajusta el pedido a ${pan.cantidadDisponible}.`);
            this.panes.push({ pan, cantidad: pan.cantidadDisponible });
            pan.descontar(pan.cantidadDisponible);
        }
    }

    mostrarPedido(): void {
        this.panes.forEach(p => {
            console.log(`${p.cantidad}x ${p.pan.tipo} - $${p.pan.precio} cada uno`);
        });
    }

    calcularTotalPedido(): number {
        return calcularTotal(this.panes);  // Usa la función de utils para calcular el total
    }
}
