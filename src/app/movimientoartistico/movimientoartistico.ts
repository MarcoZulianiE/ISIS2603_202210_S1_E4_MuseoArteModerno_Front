//import {Pais} from "../pais/pais";

export class Movimientoartistico {
  id: number;
  nombre: string;
  fechaApogeo: Date;
  //lugarOrigen: Pais

  constructor(pId: number,
    pNombre: string,
    pFechaApogeo: Date
    //lugarOrigen: pPais
    )
    {
      this.id = pId;
      this.nombre = pNombre;
      this.fechaApogeo = pFechaApogeo;
      //this.lugarOrigen = pPais;
    }
}

