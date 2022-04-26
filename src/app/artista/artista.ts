//import {Pais} from "../pais/pais";

export class Artista {
  id: number;
	nombre: string;
	fechaNacimiento: Date;
	fechaFallecimiento: Date;
	/*lugarNacimiento: Pais;
	lugarFallecimiento: Pais;*/

  constructor(id: number, nombre: string ,fechaNacimiento: Date, fechaFallecimiento: Date/*, lugarNacimiento: Pais, lugarFallecimiento: Pais*/)
  {
    this.id = id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaFallecimiento = fechaFallecimiento;
    /*this.lugarNacimiento = lugarNacimiento;
    this.lugarFallecimiento = lugarFallecimiento;*/
  }
}


