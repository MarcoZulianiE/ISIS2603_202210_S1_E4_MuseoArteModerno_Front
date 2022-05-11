import { Component, OnInit } from '@angular/core';
import { ArtistaDetail } from '../artista-detail';

import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  selected: Boolean = false;
  selectedArtista!: ArtistaDetail;

  artistas: Array<ArtistaDetail> = [];

  constructor(private artistaService: ArtistaService) { }

  getArtistas(): void {
    this.artistaService.getArtistas().subscribe((artistas) => {
      this.artistas = artistas;
    });
  }

  onSelected(artista: ArtistaDetail): void {
    this.selected = true;
    this.selectedArtista = artista;
  }

  ngOnInit() {
    this.getArtistas();
  }

}
