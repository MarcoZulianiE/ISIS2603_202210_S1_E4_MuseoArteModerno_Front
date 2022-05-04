import { Component, Input,OnInit } from '@angular/core';
import { MovimientoartisticoDetail } from '../movimientoartistico-detail';

@Component({
  selector: 'app-movimientoartistico-detalle',
  templateUrl: './movimientoartistico-detalle.component.html',
  styleUrls: ['./movimientoartistico-detalle.component.css']
})
export class MovimientoartisticoDetalleComponent implements OnInit {

  @Input() movimientoDetail!: MovimientoartisticoDetail;


  constructor() { }

  ngOnInit() {
  }

}
