export class Pais {
  id: number;
	nombrePais: string;
	coordenadas: string;
  imagen: string;

  constructor(id: number, nombrePais: string ,coordenadas: string, imagen: string)
  {
    this.id = id;
    this.nombrePais = nombrePais;
    this.coordenadas = coordenadas;
    this.imagen = imagen;
  }
}
