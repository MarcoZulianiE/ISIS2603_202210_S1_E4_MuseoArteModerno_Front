import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  private apiUrl = environment.baseUrl + 'museo';

constructor(private http: HttpClient) { }



}
