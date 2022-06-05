import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CiudadDetail } from './ciudad-detail';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = environment.baseUrl + 'ciudades';

constructor(private http: HttpClient) { }
getCiudades(): Observable<CiudadDetail[]> {
  return this.http.get<CiudadDetail[]>(this.apiUrl);
}
}
