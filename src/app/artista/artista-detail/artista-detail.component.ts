import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistaDetail } from '../artista-detail';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html',
  styleUrls: ['./artista-detail.component.css']
})
export class ArtistaDetailComponent implements OnInit, OnDestroy {

  loader: any;
  artistaId!: string;
  artistaDetail!: ArtistaDetail;

  constructor(private route: ActivatedRoute,
    private artistaService: ArtistaService) {
  }

  getArtista() {
    var _this = this;
    this.artistaService.getArtista(this.artistaId)
            .subscribe(function (o) {
            _this.artistaDetail = o;
    });
  }

  onLoad (params : any) {
    this.artistaId = params['id'];
    this.getArtista();
  };

  ngOnInit() {
    var _this = this;
    this.loader = this.route.params.subscribe(function (params) { return _this.onLoad(params); });
  }

  ngOnDestroy () {
    this.loader.unsubscribe();
  };
}
