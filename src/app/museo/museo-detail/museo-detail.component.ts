import { Component, Input, OnInit } from '@angular/core';
import { MuseoDetail } from '../museo-detail';

@Component({
  selector: 'app-museo-detail',
  templateUrl: './museo-detail.component.html',
  styleUrls: ['./museo-detail.component.css']
})
export class MuseoDetailComponent implements OnInit {

  @Input() museoDetail!: MuseoDetail;

  constructor() { }

  ngOnInit() {
  }

}
