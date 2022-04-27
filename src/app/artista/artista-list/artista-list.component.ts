import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';

import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  artistas: Array<Artista> = [];

  constructor(private artistaService: ArtistaService) { }

  getArtistas(): void {
    this.artistaService.getArtistas().subscribe((artistas) => {
      this.artistas = artistas;
      console.log(this.artistas)
    });
  }

  ngOnInit() {
    this.getArtistas();
  }

}
