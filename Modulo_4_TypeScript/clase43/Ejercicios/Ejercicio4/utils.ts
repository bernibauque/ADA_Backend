import { Auto } from './auto';

export function ordenarPorAño(autos: Auto[]): Auto[] {
    return autos.sort((a, b) => a.año - b.año);
}

export function ordenarPorMarca(autos: Auto[]): Auto[] {
    return autos.sort((a, b) => a.marca.localeCompare(b.marca));
}
