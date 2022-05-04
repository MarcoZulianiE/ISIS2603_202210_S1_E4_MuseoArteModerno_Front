import { Movimientoartistico } from "./movimientoartistico";
import { Pais } from "../pais/pais";
import {Artista} from "../artista/artista";
import {Obra} from "../obra/obra";
//import {Museo} from "../museo/museo";

export class MovimientoartisticoDetail extends Movimientoartistico{
 obras: Array<Obra> = [];
 //museos: Array<Museo> = [];
 artistias: Array<Artista> = [];

 constructor(pId: number,
  pNombre: string,
  pImagen: string,
  pDescripcion: string,
  pFechaApogeo: Date,
  pObras: Array<Obra>,
  pArtistas: Array<Artista>,
  //pMuseos: Array<Museo>,
  pLugarOrigen: Pais

  )
  {
    super(pId, pNombre, pImagen,pDescripcion,pFechaApogeo,
      pLugarOrigen
      );
      this.obras = pObras;
      this.artistias = pArtistas;
      //this.museos = pMuseos;
  }
}
