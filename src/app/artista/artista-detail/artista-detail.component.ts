import { Component, Input, OnInit } from '@angular/core';
import { ArtistaDetail } from '../artista-detail';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html',
  styleUrls: ['./artista-detail.component.css']
})
export class ArtistaDetailComponent implements OnInit {

  @Input() artistaDetail!: ArtistaDetail;

  constructor() { }

  ngOnInit() {
  }

}
