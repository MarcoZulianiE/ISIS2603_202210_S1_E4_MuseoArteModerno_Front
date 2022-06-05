import { Artista } from "../artista/artista";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";
import { Museo } from "../museo/museo";
import { Obra } from "./obra";


export class ObraDetail extends Obra {


  constructor(id: number, nombre: string, tipo: string,
    descripcion: string, fechaPublicacion: Date, imagen: string,
    museo: Museo, artista: Artista, movimiento: Movimientoartistico) {

  super(id,nombre,tipo,descripcion,fechaPublicacion,
    imagen,museo,artista,movimiento);


  }


}
