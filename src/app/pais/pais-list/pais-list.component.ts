import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { PaisDetail } from '../pais-detail';



@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisDetail> = [];
  selected: boolean = false;
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
