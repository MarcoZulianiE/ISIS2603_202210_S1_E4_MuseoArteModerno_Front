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


  constructor(private movimientoService: MovimientoartisticoService) { }

  getMovimientos(){
    this.movimientoService.getMovimientosArtisticos().subscribe((recibidos) =>{
      this.movimientos = recibidos;
    });
  }
  ngOnInit() {
    this.getMovimientos();
  }

}
