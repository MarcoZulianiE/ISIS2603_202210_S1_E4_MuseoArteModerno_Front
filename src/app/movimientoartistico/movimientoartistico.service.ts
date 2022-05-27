import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {MovimientoartisticoDetail } from './movimientoartistico-detail';

@Injectable({
  providedIn: 'root'
})
export class MovimientoartisticoService {

constructor(private http: HttpClient) { }

  private apiURL: string = environment.baseUrl + 'movimientoartisticos';

  getMovimientosArtisticos(): Observable<MovimientoartisticoDetail[]>{
    return this.http.get<MovimientoartisticoDetail[]>(this.apiURL);
  }

  getMovimientoArtistico(pId: string): Observable<MovimientoartisticoDetail>{
    return this.http.get<MovimientoartisticoDetail>(this.apiURL + '/'+pId);
  }
}
