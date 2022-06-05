import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadService } from '../ciudad.service';
import { CiudadDetail } from '../ciudad-detail';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {

  constructor(private ciudadService: CiudadService) { }
  ciudades: Array<Ciudad> = [];
  selected: boolean = false;
  selectedCiudad!: CiudadDetail;

  ngOnInit() {
    this.getCiudades()
  }

  onSelected(pCiudad: CiudadDetail):void{
    this.selected = true;
    this.selectedCiudad = pCiudad;
  }
  getCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
}
}
