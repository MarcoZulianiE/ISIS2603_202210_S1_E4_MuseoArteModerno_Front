import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObraDetail } from '../obra-detail';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-detail',
  templateUrl: './obra-detail.component.html',
  styleUrls: ['./obra-detail.component.css']
})
export class ObraDetailComponent implements OnInit, OnDestroy {

  loader: any;
  obraId!: string;
  obraDetail!: ObraDetail;


  constructor(private route: ActivatedRoute,
    private obraService: ObraService) { }

  getObra(): void {
    var _this = this;
    this.obraService.getObra(this.obraId)
            .subscribe(function (o) {
            _this.obraDetail = o;
    });
  }

  onLoad(params: any) {
    this.obraId = params['id'];
    this.getObra();
  }

  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

  ngOnInit() {
    var _this = this;
    this.loader = this.route.params.subscribe(function (params) { return _this.onLoad(params); });
  }

}
