import {Pais} from "../pais/pais";

export class Movimientoartistico {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  fechaApogeo: Date;
  lugarOrigen: Pais

  constructor(pId: number,
    pNombre: string,
    pImagen: string,
    pDescripcion: string,
    pFechaApogeo: Date,
    pLugarOrigen: Pais
    )
    {
      this.id = pId;
      this.nombre = pNombre;
      this.imagen = pImagen;
      this.descripcion = pDescripcion;
      this.fechaApogeo = pFechaApogeo;
      this.lugarOrigen = pLugarOrigen;
    }
}

