import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artista } from './artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private apiUrl: string = environment.baseUrl + 'artistas';

  constructor(private http: HttpClient) { }

  getArtistas(): Observable<Artista[]> {
    console.log(this.http.get<Artista[]>(this.apiUrl));
    return this.http.get<Artista[]>(this.apiUrl);
  }
}
