export class Pais {
  id: number;
	nombrePais: string;
	coordenadas: string;

  constructor(id: number, nombrePais: string ,coordenadas: string)
  {
    this.id = id;
    this.nombrePais = nombrePais;
    this.coordenadas = coordenadas;
  }
}
