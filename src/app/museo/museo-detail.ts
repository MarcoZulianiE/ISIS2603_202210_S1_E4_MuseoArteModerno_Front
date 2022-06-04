import { Museo } from "./museo";
import { Pais } from "../pais/pais";
import {Artista} from "../artista/artista";
import {Obra} from "../obra/obra";
import {Movimientoartistico} from "../movimientoartistico/movimientoartistico";

export class MuseoDetail extends Museo{

  artistas: Array<Artista> = [];
  obras: Array<Obra> = [];
  movimientos: Array<Movimientoartistico> = [];

  constructor(
    id: number,
    nombre: string,
    img: string,
    direccion: string,
    salasExposicion: Array<String>,
    totalObrasExhibidas: number,
    ubicacion: Pais,
    artistas: Array<Artista>,
    obras: Array<Obra>,
    movimientos: Array<Movimientoartistico>

    )
  {
    super (id, nombre, img, direccion, salasExposicion, totalObrasExhibidas, ubicacion);
      this.artistas = artistas;
      this.obras = obras;
      this.movimientos = movimientos;
  }
}
