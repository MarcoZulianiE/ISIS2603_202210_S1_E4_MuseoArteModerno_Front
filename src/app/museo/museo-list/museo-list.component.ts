import { Component, OnInit } from '@angular/core';
import { Museo  } from '../museo';
import { MuseoService } from '../museo.service';
import { MuseoDetail } from '../museo-detail';

@Component({
  selector: 'app-museo-list',
  templateUrl: './museo-list.component.html',
  styleUrls: ['./museo-list.component.css']
})
export class MuseoListComponent implements OnInit {

  museos: Array<MuseoDetail> = [];
  selectedMuseo!: MuseoDetail;
  tipoSort: string = 'A..Z';

  constructor(private museoService: MuseoService) { }

  getMuseos(){
    this.museoService.getMuseos().subscribe((recibidos) =>{
      this.museos = recibidos;
      this.ordenar();
    });
  }

  getMuseosFiltrados(substr: any): void {
    this.museoService.getMuseos().subscribe((recibidos) =>{
      this.museos = recibidos.filter((a)=> {
        return a.nombre.toLowerCase().match(substr.toLowerCase())
      })
      this.ordenar();
    }
    );
  }

  onSelected(tipo: string): void {
    this.tipoSort = tipo;
    this.ordenar()
  }

  ordenar () : void {
    if (this.tipoSort=='A..Z') {
      this.museos = this.museos.sort((a,b)=> {
        if(a.nombre > b.nombre) return 1;
        if(a.nombre <= b.nombre) return -1;
        return 0;
      });
    } else if (this.tipoSort=='Z..A') {
      this.museos = this.museos.sort((a,b)=> {
        if(a.nombre < b.nombre) return 1;
        if(a.nombre >= b.nombre) return -1;
        return 0;
      });
    }
  }

  filtrar() {
    if (document.querySelector('input')?.value == '') {
      this.getMuseos();
    } else {
      this.getMuseosFiltrados(document.querySelector('input')?.value);
    }
  }

  ngOnInit() {
    this.getMuseos();
  }

}
