import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { PaisDetail } from '../pais-detail';



@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  tipoSort: string = 'A..Z';
  paises: Array<PaisDetail> = [];
  selectedPais!: PaisDetail;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.ordenar();
    });
  }

  getPaisesFiltrados(substr: any): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises.filter((a)=> {
        return a.nombrePais.toLowerCase().match(substr.toLowerCase())
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
      this.paises.sort((a,b)=> {
        if(a.nombrePais > b.nombrePais) return 1;
        if(a.nombrePais <= b.nombrePais) return -1;
        return 0;
      });
    } else if (this.tipoSort=='Z..A') {
      this.paises.sort((a,b)=> {
        if(a.nombrePais < b.nombrePais) return 1;
        if(a.nombrePais >= b.nombrePais) return -1;
        return 0;
      });
    }
  }

  filtrar() {
    if (document.querySelector('input')?.value == '') {
      this.getPaises();
    } else {
      this.getPaisesFiltrados(document.querySelector('input')?.value);
    }
  }

  ngOnInit(): void {
    this.getPaises();
  }



}
