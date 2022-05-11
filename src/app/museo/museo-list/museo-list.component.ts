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
  selected: Boolean = false;
  selectedMuseo!: MuseoDetail;

  constructor(private museoService: MuseoService) { }

  onSelected(pMuseo: MuseoDetail):void{
    this.selected = true;
    this.selectedMuseo = pMuseo;
  }

  getMuseos(){
    this.museoService.getMuseos().subscribe((recibidos) =>{
      this.museos = recibidos;
    });
  }

  ngOnInit() {
    this.getMuseos();
  }

}
