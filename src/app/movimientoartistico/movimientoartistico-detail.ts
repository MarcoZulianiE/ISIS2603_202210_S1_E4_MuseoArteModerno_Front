import { Movimientoartistico } from "./movimientoartistico";
//import { Pais } from "../pais/pais";
//import {Artista} from "../artista/artista";
//import {Obra} from "../obra/obra";
//Import {Museo} from "../museo/museo";

export class MovimientoartisticoDetail extends Movimientoartistico{
 //obras: Array<Obra> = [];
 //museos: Array<Obra> = [];
 //artistias: Array<Artista> = [];

 constructor(pId: number,
  pNombre: string,
  pFechaApogeo: Date
  //pObras: Array<Obra>,
  //pArtistas: Array<Artista>,
  //pMuseos: Array<Museo>,
  //pLugarOrigen: pPais

  )
  {
    super(pId, pNombre, pFechaApogeo,
      //pLugarOrigen
      );
      //this.obras = pObras;
      //this.artistas = pArtistas;
      //this.museos = pMuseos;
  }
}
