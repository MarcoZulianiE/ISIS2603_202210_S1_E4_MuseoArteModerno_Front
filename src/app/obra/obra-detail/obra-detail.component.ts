import { Component, Input, OnInit } from '@angular/core';
import { Obra } from '../obra';



@Component({
  selector: 'app-obra-detail',
  templateUrl: './obra-detail.component.html',
  styleUrls: ['./obra-detail.component.css']
})
export class ObraDetailComponent implements OnInit {

  @Input() obraDetail! : Obra;


  constructor() { }

  ngOnInit() {
  }

}
