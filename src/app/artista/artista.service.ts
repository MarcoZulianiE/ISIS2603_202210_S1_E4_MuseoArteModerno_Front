import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArtistaDetail } from './artista-detail';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private apiUrl: string = environment.baseUrl + 'artistas';

  constructor(private http: HttpClient) { }

  getArtistas(): Observable<ArtistaDetail[]> {
    return this.http.get<ArtistaDetail[]>(this.apiUrl);
  }
}
