import { Component, OnInit } from '@angular/core';

import { ObraDetail } from '../obra-detail';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {

  obras: Array<ObraDetail> = [];
  selectedObra!: ObraDetail;
  tipoSort: string = 'A..Z';

  constructor(private obraService: ObraService) { }


  onSelected(sortSty: string): void {
    this.tipoSort = sortSty;
    this.sortObras();
  }
  getObras(): void {
    this.obraService.getObras().subscribe(obras => {
      this.obras = obras;
    })

  }

  getObrasFilter(str: any): void {
    this.obraService.getObras().subscribe((obras) => {
      this.obras = obras.filter((a) => {
        return a.nombre.toLowerCase().match(str.toLowerCase())
      })
      this.sortObras();
    });
  }

  sortObras(): void {
    if (this.tipoSort == 'A..Z') {
      this.obras.sort((a, b) => {
        if (a.nombre > b.nombre) return 1;
        if (a.nombre <= b.nombre) return -1;
        return 0;
      });
    } else if (this.tipoSort == 'Z..A') {
       this.obras.sort((a, b) => {
        if (a.nombre < b.nombre) return 1;
        if (a.nombre >= b.nombre) return -1;
        return 0;
      });
    }
  }

  filterObras() {
    if (document.querySelector('input')?.value == '') {
      this.getObras();
    } else {
      this.getObrasFilter(document.querySelector('input')?.value);
    }
  }

  ngOnInit() {
    this.getObras();
  }

}
