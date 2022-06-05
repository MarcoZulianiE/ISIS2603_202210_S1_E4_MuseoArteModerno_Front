import { Component, OnInit } from '@angular/core';
import { ArtistaDetail } from '../artista-detail';

import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  tipoSort: string = 'A..Z';
  selectedArtista!: ArtistaDetail;

  artistas: Array<ArtistaDetail> = [];

  constructor(private artistaService: ArtistaService) { }

  getArtistas(): void {
    this.artistaService.getArtistas().subscribe((artistas) => {
      this.artistas = artistas;
      this.ordenar();
    });
  }

  getArtistasFiltrados(substr: any): void {
    this.artistaService.getArtistas().subscribe((artistas) => {
      this.artistas = artistas.filter((a)=> {
        return a.nombre.toLowerCase().match(substr.toLowerCase())
      })
      this.ordenar();
    });
  }

  onSelected(tipo: string): void {
    this.tipoSort = tipo;
    this.ordenar()
  }

  ordenar () : void {
    if (this.tipoSort=='A..Z') {
      this.artistas = this.artistas.sort((a,b)=> {
        if(a.nombre > b.nombre) return 1;
        if(a.nombre <= b.nombre) return -1;
        return 0;
      });
    } else if (this.tipoSort=='Z..A') {
      this.artistas = this.artistas.sort(this.funcSort());
    }
  }

  funcSort () {
    return function sortFunc (a : ArtistaDetail, b : ArtistaDetail) {
      if(a.nombre < b.nombre) return 1;
      if(a.nombre >= b.nombre) return -1;
      return 0;
    }
  }

  filtrar() {
    if (document.querySelector('input')?.value == '') {
      this.getArtistas();
    } else {
      this.getArtistasFiltrados(document.querySelector('input')?.value);
    }
  }

  ngOnInit() {
    this.getArtistas();
  }

}
