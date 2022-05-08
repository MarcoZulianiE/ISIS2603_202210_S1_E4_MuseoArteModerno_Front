import {Pais} from "../pais/pais";

export class Ciudad {
  nombre:string;
  id:number;
  coordenadasCiudad:string;
  imagen:string;
  pais:Pais;

	constructor(imagen:string,nombre:string , id:number,coordenadasCiudad:string,pais:Pais) {
    this.nombre=nombre;
    this.id=id;
    this.coordenadasCiudad=coordenadasCiudad;
    this.imagen=imagen;
    this.pais=pais;
	}

}
