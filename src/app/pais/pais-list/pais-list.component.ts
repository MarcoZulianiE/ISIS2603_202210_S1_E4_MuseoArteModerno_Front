import { Component, OnInit } from '@angular/core';
import {Pais} from '../pais'
import { PaisService } from '../pais.service';
import { PaisDetail } from '../pais-detail';
import { PaisDetailComponent } from '../pais-detail/pais-detail.component';



@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisDetail> = [];
  selected: Boolean = false;
  selectedPais!: PaisDetail;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  ngOnInit(): void {
    this.getPaises();
  }

  onSelected(pPais: PaisDetail):void{
    this.selected = true;
    this.selectedPais = pPais;
  }

}
