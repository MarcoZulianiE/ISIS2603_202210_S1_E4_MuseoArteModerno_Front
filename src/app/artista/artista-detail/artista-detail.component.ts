import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaDetail } from '../artista-detail';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html',
  styleUrls: ['./artista-detail.component.css']
})
export class ArtistaDetailComponent implements OnInit {

  artistaId!: string;
  @Input() artistaDetail!: ArtistaDetail;

  constructor(private route: ActivatedRoute,
    private artistaService: ArtistaService) {
  }

  getArtista() {
    this.artistaService.getArtista(this.artistaId).subscribe(artista => {
      this.artistaDetail = artista;
    })
  }

  ngOnInit() {
    if (this.artistaDetail === undefined) {
      this.artistaId = this.route.snapshot.paramMap.get('id')!
      if (this.artistaId) {
        this.getArtista();
      }
    }
  }

}
