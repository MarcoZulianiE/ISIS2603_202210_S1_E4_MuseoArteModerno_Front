import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from './ciudad';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = environment.baseUrl + 'ciudades';

constructor(private http: HttpClient) { }
getCiudades(): Observable<Ciudad[]> {
  return this.http.get<Ciudad[]>(this.apiUrl);
}
}
