import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseoDetail } from '../museo-detail';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo-detail',
  templateUrl: './museo-detail.component.html',
  styleUrls: ['./museo-detail.component.css']
})
export class MuseoDetailComponent implements OnInit, OnDestroy {

  loader: any;
  museoId!: string;
  museoDetail!: MuseoDetail;

  constructor(private route: ActivatedRoute,
    private museoService: MuseoService) {
  }

  getMuseo() {
    var _this = this;
    this.museoService.getMuseo(this.museoId)
            .subscribe(function (o) {
            _this.museoDetail = o;
    });
  }

  onLoad (params : any) {
    this.museoId = params['id'];
    this.getMuseo();
  }

  ngOnInit() {
    var _this = this;
    this.loader = this.route.params.subscribe(function (params) { return _this.onLoad(params); });
  }

  ngOnDestroy () {
    this.loader.unsubscribe();
  }

}
