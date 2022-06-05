import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisDetail } from '../pais-detail';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit, OnDestroy {

  loader: any;
  paisId!: string;
  paisDetail!: PaisDetail;

  constructor(private route: ActivatedRoute,
    private paisService: PaisService) {
  }
  getPais() {
    var _this = this;
    this.paisService.getPais(this.paisId)
            .subscribe(function (o) {
            _this.paisDetail = o;
    });
  }

  onLoad (params : any) {
    this.paisId = params['id'];
    this.getPais();
  }

  ngOnInit() {
    var _this = this;
    this.loader = this.route.params.subscribe(function (params) { return _this.onLoad(params); });
  }

  ngOnDestroy () {
    this.loader.unsubscribe();
  }
}
