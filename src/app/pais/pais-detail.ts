import {Pais} from "./pais";
import { Movimientoartistico } from "../movimientoartistico/movimientoartistico";
import {Artista} from "../artista/artista";
//import {Ciudad} from "../ciudad/ciudad";
//import {Museo} from "../museo/museo";


export class PaisDetail extends Pais{
  movimientos: Array<Movimientoartistico> = [];
  artistasFallecimiento: Array<Artista> = [];
  artistasNacimiento: Array<Artista> = [];
  //ciudades: Array<Ciudad> = [];
  //museos: Array<Museo> = [];


  constructor(id: number, nombrePais: string ,coordenadas: string, movimientos: Array<Movimientoartistico>,
              artistasFallecimiento: Array<Artista>, artistasNacimiento: Array<Artista>/*, ciudades: Array<Ciudad>, museos: Array<Museo>*/)
  {
    super(id, nombrePais, coordenadas);
    this.movimientos = movimientos;
    this.artistasFallecimiento = artistasFallecimiento;
    this.artistasNacimiento = artistasNacimiento;
    //this.ciudades = ciudades;
    //this.museos = museos;
  }
}
