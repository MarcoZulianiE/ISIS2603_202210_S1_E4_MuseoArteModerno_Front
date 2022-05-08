import { Ciudad } from "./ciudad";
import { Pais } from "../pais/pais";


export class CiudadDetail extends Ciudad {
  pais:Pais;

  constructor(id: number,nombre: string,imagen:string,coordenadasCiudad:string,pais:Pais){
      super(imagen,nombre,id,coordenadasCiudad,pais);
      this.pais=pais;

    }

}
