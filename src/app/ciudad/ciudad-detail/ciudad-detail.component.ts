import { Component, Input, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadDetail } from '../ciudad-detail';

@Component({
  selector: 'app-ciudad-detail',
  templateUrl: './ciudad-detail.component.html',
  styleUrls: ['./ciudad-detail.component.css']
})
export class CiudadDetailComponent implements OnInit {

  @Input() ciudadDetail!: CiudadDetail;

  constructor() { }

  ngOnInit() {
  }

}
