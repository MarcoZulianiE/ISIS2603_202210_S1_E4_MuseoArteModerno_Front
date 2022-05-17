import { Component, OnInit } from '@angular/core';

import { MovimientoartisticoDetail } from '../movimientoartistico-detail';
import { MovimientoartisticoService } from '../movimientoartistico.service';

@Component({
  selector: 'app-movimientoartistico-list',
  templateUrl: './movimientoartistico-list.component.html',
  styleUrls: ['./movimientoartistico-list.component.css']
})
export class MovimientoartisticoListComponent implements OnInit {
  movimientos: Array<MovimientoartisticoDetail> = [];
  selected: boolean = false;
  selectedMovimiento!: MovimientoartisticoDetail;

  constructor(private movimientoService: MovimientoartisticoService) { }

  onSelected(pMovimiento: MovimientoartisticoDetail):void{
    this.selected = true;
    this.selectedMovimiento = pMovimiento;

  }
  getMovimientos(){
    this.movimientoService.getMovimientosArtisticos().subscribe((recibidos) =>{
      this.movimientos = recibidos;
    });
  }
  ngOnInit() {
    this.getMovimientos();
  }

}
