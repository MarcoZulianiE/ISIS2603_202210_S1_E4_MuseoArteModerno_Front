import { Artista } from "../artista/artista";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";
import { Museo } from "../museo/museo";
import { Obra } from "./obra";


export class ObraDetail extends Obra {


  constructor(id: number, nombre: String, tipo: String,
    descripcion: String, fechaPublicacion: Date, imagen: String,
    museo: Museo, artista: Artista, movimiento: Movimientoartistico) {

  super(id,nombre,tipo,descripcion,fechaPublicacion,
    imagen,museo,artista,movimiento);


  }


}
