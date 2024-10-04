import { Mueble } from './mueble';
import { ordenarPorPrecio, filtrarPorTipo } from './utils';

export class InventarioMuebles {
    private muebles: Mueble[] = [];

    agregarMueble(mueble: Mueble): void {
        this.muebles.push(mueble);
    }

    eliminarMueble(tipo: string): void {
        this.muebles = this.muebles.filter(m => m.tipo !== tipo);
    }

    mostrarMuebles(): void {
        this.muebles.forEach(mueble => {
            console.log(`${mueble.tipo} de ${mueble.material} - Precio: $${mueble.precio}`);
        });
    }

    ordenarMuebles(): void {
        this.muebles = ordenarPorPrecio(this.muebles);
    }

    filtrarMuebles(tipo: string): void {
        const mueblesFiltrados = filtrarPorTipo(this.muebles, tipo);
        mueblesFiltrados.forEach(mueble => {
            console.log(`${mueble.tipo} de ${mueble.material} - Precio: $${mueble.precio}`);
        });
    }
}
