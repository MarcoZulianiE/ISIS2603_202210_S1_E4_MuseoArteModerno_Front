import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadService } from '../ciudad.service';
import { CiudadDetail } from '../ciudad-detail';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {
  tipoSort: string = 'A..Z';

  constructor(private ciudadService: CiudadService) { }
  ciudades: Array<Ciudad> = [];
  selected: boolean = false;
  selectedCiudad!: CiudadDetail;




  getCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
}
getCiudadesFiltradas(substr: any): void {
  this.ciudadService.getCiudades().subscribe((ciudades) => {
    this.ciudades = ciudades.filter((a)=> {
      return a.nombre.toLowerCase().match(substr.toLowerCase())
    })
    this.ordenar();
  });
}

onSelected(tipo: string): void {
  this.tipoSort = tipo;
  this.ordenar()
}

ordenar () : void {

  if (this.tipoSort=='A..Z') {
    this.ciudades.sort((a,b)=> {
      if(a.nombre > b.nombre) return 1;
      if(a.nombre <= b.nombre) return -1;
      return 0;
    });
  } else if (this.tipoSort=='Z..A') {
    this.ciudades.sort((a,b)=> {
      if(a.nombre < b.nombre) return 1;
      if(a.nombre >= b.nombre) return -1;
      return 0;
    });
  }
}


filtrar() {
  if (document.querySelector('input')?.value == '') {
    this.getCiudades();
  } else {
    this.getCiudadesFiltradas(document.querySelector('input')?.value);
  }
}
ngOnInit() :void {
  this.getCiudades()
}
}
