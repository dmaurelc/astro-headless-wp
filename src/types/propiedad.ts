export interface Propiedad {
  id: number;
  title: string;
  slug: string;
  destacada: boolean;
  descripcion: string;
  precio: string;
  direccion: string;
  dormitorios: string;
  banos: string;
  estacionamientos: string;
  galeria: Imagen[];
  mapa: Mapa;
  tipo: string[];
  operacion: string[];
  link: string;
}

export interface Imagen {
  url: string;
  alt: string;
  title: string;
  sizes: {
    thumbnail: string;
    medium_large: string;
  };
}

export interface Mapa {
  lat: number;
  lng: number;
  label: string | null;
}
