import { Component, OnInit } from '@angular/core';

import { MovimientoartisticoDetail } from '../movimientoartistico-detail';
import { MovimientoartisticoService } from '../movimientoartistico.service';

@Component({
  selector: 'app-movimientoartistico-list',
  templateUrl: './movimientoartistico-list.component.html',
  styleUrls: ['./movimientoartistico-list.component.css']
})
export class MovimientoartisticoListComponent implements OnInit {

  tipoSort: string = 'A..Z';
  movimientos: Array<MovimientoartisticoDetail> = [];
  selected: boolean = false;
  selectedMovimiento!: MovimientoartisticoDetail;

  constructor(private movimientoService: MovimientoartisticoService) { }

  onSelected(tipo: string):void{
    this.tipoSort = tipo;
    this.ordenar();
  }

  ordenar () : void {
    if (this.tipoSort=='A..Z') {
      this.movimientos = this.movimientos.sort((a,b)=> {
        if(a.nombre > b.nombre) return 1;
        if(a.nombre <= b.nombre) return -1;
        return 0;
      });
    } else if (this.tipoSort=='Z..A') {
      this.movimientos = this.movimientos.sort((a,b)=> {
        if(a.nombre < b.nombre) return 1;
        if(a.nombre >= b.nombre) return -1;
        return 0;
      });
    }
  }

  getMovimientos(){
    this.movimientoService.getMovimientosArtisticos().subscribe((recibidos) =>{
      this.movimientos = recibidos;
      this.ordenar();
    });
  }

  getMovimientosFiltrados(substr: any): void{
    this.movimientoService.getMovimientosArtisticos().subscribe( (recibidos) => {
      this.movimientos = recibidos.filter( (a) => {
        return a.nombre.toLowerCase().match(substr.toLowerCase())
      })
    });
  }

  filtrar() {
    if (document.querySelector('input')?.value == '') {
      this.getMovimientos();
    } else {
      this.getMovimientosFiltrados(document.querySelector('input')?.value);
    }
  }


  ngOnInit() {
    this.getMovimientos();
  }

}
