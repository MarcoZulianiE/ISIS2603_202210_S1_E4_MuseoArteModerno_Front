//import { Museo } from "./museo/museo";
//import { Artista } from "./artista/artista";
//import { MovimientoArtistico } from "./movimientoartistico/movimientoartistico";


export class Obra {
  id: number;
  nombre: String;
  tipo: String;
  descripcion: String;
  fechaPublicacion: Date;

  //  Museo: museo;
  //  Artista: artista;
  //  MovimientoArtistico: movimiento;



  constructor(id: number, nombre: String, tipo: String, descripcion: String, fechaPublicacion: Date,
  ) {
    this.id = id;
    this.nombre = nombre,
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
    //  this.museo = museo;
    //  this.artista = artista;
    //  this.movimiento = moviemiento;


  }
}
