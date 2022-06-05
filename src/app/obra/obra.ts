import { Museo } from "../museo/museo";
import { Artista } from "../artista/artista";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";



export class Obra {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  fechaPublicacion: Date;
  imagen : string;

  museo: Museo;
  artista: Artista;
  movimiento: Movimientoartistico;



  constructor(id: number, nombre: string, tipo: string, descripcion: string,
    fechaPublicacion: Date, imagen: string,  museo: Museo, artista: Artista, movimiento: Movimientoartistico
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
    this.imagen = imagen;
    this.museo = museo;
    this.artista = artista;
    this.movimiento = movimiento;


  }
}
