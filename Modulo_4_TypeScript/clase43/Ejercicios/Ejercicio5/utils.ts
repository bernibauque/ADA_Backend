import { Mueble } from './mueble';

export function ordenarPorPrecio(muebles: Mueble[]): Mueble[] {
    return muebles.sort((a, b) => a.precio - b.precio);
}

export function filtrarPorTipo(muebles: Mueble[], tipo: string): Mueble[] {
    return muebles.filter(mueble => mueble.tipo === tipo);
}
