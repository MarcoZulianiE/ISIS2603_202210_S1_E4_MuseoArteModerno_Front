import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovimientoartisticoDetail } from '../movimientoartistico-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimientoartisticoService } from '../movimientoartistico.service';

@Component({
  selector: 'app-movimientoartistico-detalle',
  templateUrl: './movimientoartistico-detalle.component.html',
  styleUrls: ['./movimientoartistico-detalle.component.css'],
})
export class MovimientoartisticoDetalleComponent implements OnInit, OnDestroy {

  loader: any;
  movimientoId!: string;
  movimientoDetail!: MovimientoartisticoDetail;

  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoartisticoService
  ) {}

  ngOnInit() {
    var _this = this;
    this.loader = this.route.params.subscribe(function (params) {
      return _this.onLoad(params);
    });
  }

  getMovimientoArtistico(){
    var _this = this;
    this.movimientoService
      .getMovimientoArtistico(this.movimientoId)
      .subscribe(function (o) {
        _this.movimientoDetail = o;
      });
  }
  onLoad(params: any) {
    this.movimientoId = params["id"];
    this.getMovimientoArtistico();
  }
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
