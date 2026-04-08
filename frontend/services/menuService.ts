import { menuData } from '../data/mockData';
import { Product } from '../types';

/**
 * Simulando un retardo de red si quieres en el futuro, o directamente retornar mock.
 * Cuando conectes la base de datos real, solo editarás este archivo.
 */
export async function fetchMenus(): Promise<Product[]> {
  // Ej: const res = await db.query('SELECT * FROM menu');
  // return res;
  return menuData;
}
