import type { Propiedad } from '../types/propiedad';

const API_URL = 'https://headless.thisistheweb.cl/wp-json/maurel/v1/propiedades';

export async function obtenerPropiedades(): Promise<Propiedad[]> {
  try {
    const respuesta = await fetch(API_URL);
    
    if (!respuesta.ok) {
      throw new Error(`Error al obtener propiedades: ${respuesta.status}`);
    }
    
    const datos: Propiedad[] = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al obtener las propiedades:', error);
    return [];
  }
}

export async function obtenerPropiedadPorId(id: number): Promise<Propiedad | null> {
  try {
    const propiedades = await obtenerPropiedades();
    const propiedad = propiedades.find(p => p.id === id);
    return propiedad || null;
  } catch (error) {
    console.error(`Error al obtener la propiedad con ID ${id}:`, error);
    return null;
  }
}

export async function obtenerPropiedadPorSlug(slug: string): Promise<Propiedad | null> {
  try {
    const propiedades = await obtenerPropiedades();
    const propiedad = propiedades.find(p => p.slug === slug);
    return propiedad || null;
  } catch (error) {
    console.error(`Error al obtener la propiedad con slug ${slug}:`, error);
    return null;
  }
}

export function obtenerPropiedadesDestacadas(propiedades: Propiedad[]): Propiedad[] {
  return propiedades.filter(propiedad => propiedad.destacada);
}

export function formatearPrecio(precio: string): string {
  const numero = parseInt(precio, 10);
  return numero.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  });
}
