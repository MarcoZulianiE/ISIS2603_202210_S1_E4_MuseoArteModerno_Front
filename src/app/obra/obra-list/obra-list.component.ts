import { Component, OnInit } from '@angular/core';
import { ObraDetail} from '../obra-detail';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {


  obras: Array<ObraDetail> = [];
  selected: boolean = false;
  selectedObra! : ObraDetail;

  constructor(private obraService: ObraService) { }


  onSelected(pObra: ObraDetail):void{
    this.selected = true;
    this.selectedObra = pObra;
  }
  getObras(){
      this.obraService.getObras().subscribe(obras => {
        this.obras = obras;
      })

  }

  ngOnInit() {
    this.getObras();
  }

}
