import {Artista} from "./artista";
//import { Pais } from "../pais/pais";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";
//import {Obra} from "../obra/obra";
//Import {Museo} from "../museo/museo";

export class ArtistaDetail extends Artista{
  movimientos: Array<Movimientoartistico> = [];
  //obras: Array<Obra> = [];
  //museos: Array<Museo> = [];

  constructor(id: number, nombre: string ,imagen: string ,fechaNacimiento: Date, fechaFallecimiento: Date/*, lugarNacimiento: Pais, lugarFallecimiento: Pais*/
              , movimientos: Array<Movimientoartistico>/*, obras: Array<Obra>, museos: Array<Museo>*/)
  {
    super(id, nombre, imagen, fechaNacimiento, fechaFallecimiento/*, lugarNacimiento, lugarFallecimiento*/);
    this.movimientos = movimientos;
    //this.obras = obras;
    //this.museos = museos;
  }
}
