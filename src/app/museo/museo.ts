import {Pais} from "../pais/pais";

export class Museo {
  id: number;
  nombre: string;
  img: string;
  direccion: string;
  salasExposicion: Array<String>;
  totalObrasExhibidas: number;
  ubicacion: Pais;

  constructor(
    id: number,
    nombre: string,
    img: string,
    direccion: string,
    salasExposicion: Array<String>,
    totalObrasExhibidas: number,
    ubicacion: Pais
    )
    {
      this.id = id;
      this.nombre = nombre;
      this.img = img;
      this.direccion = direccion;
      this.salasExposicion = salasExposicion;
      this.totalObrasExhibidas = totalObrasExhibidas;
      this.ubicacion = ubicacion;
    }
}

