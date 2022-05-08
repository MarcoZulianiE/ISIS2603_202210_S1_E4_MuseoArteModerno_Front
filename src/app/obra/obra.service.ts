import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
import { ObraDetail } from './obra-detail';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  private apiUrl : string = environment.baseUrl + 'obras';

  constructor(private http: HttpClient) { }

  getObras() : Observable<ObraDetail[]>{
    return this.http.get<ObraDetail[]>(this.apiUrl)
    }



}
