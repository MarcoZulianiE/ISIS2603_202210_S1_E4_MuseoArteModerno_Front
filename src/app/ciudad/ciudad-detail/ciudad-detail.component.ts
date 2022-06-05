import { Component, OnDestroy, OnInit } from '@angular/core';
import { CiudadDetail } from '../ciudad-detail';
import { ActivatedRoute } from '@angular/router';
import { CiudadService } from '../ciudad.service';


@Component({
  selector: 'app-ciudad-detail',
  templateUrl: './ciudad-detail.component.html',
  styleUrls: ['./ciudad-detail.component.css']
})
export class CiudadDetailComponent implements OnInit,OnDestroy {
  loader:any;
  ciudadId!: string;
  ciudadDetail!: CiudadDetail;



  constructor(private route: ActivatedRoute,
    private ciudadService: CiudadService) { }

    getPais() {
      var _this = this;
      this.ciudadService.getCiudad(this.ciudadId)
              .subscribe(function (o) {
              _this.ciudadDetail = o;
      });
    }

    onLoad (params : any) {
      this.ciudadId = params['id'];
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
