import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.css']
})
export class CiudadListComponent implements OnInit {

  constructor(private ciudadService: CiudadService) { }
  ciudades: Array<Ciudad> = [];
  ngOnInit() {
    this.getCiudades
  }
  getCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
}
}
