import { Museo } from "../museo/museo";
import { Artista } from "../artista/artista";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";



export class Obra {
  id: number;
  nombre: String;
  tipo: String;
  descripcion: String;
  fechaPublicacion: Date;
  imagen : String;

  museo: Museo;
  artista: Artista;
  movimientoArtistico: Movimientoartistico;



  constructor(id: number, nombre: String, tipo: String, descripcion: String,
    fechaPublicacion: Date, imagen: String,  museo: Museo, artista: Artista, movimiento: Movimientoartistico
  ) {
    this.id = id;
    this.nombre = nombre,
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
    this.imagen = imagen;
    this.museo = museo;
    this.artista = artista;
    this.movimientoArtistico = movimiento;


  }
}
