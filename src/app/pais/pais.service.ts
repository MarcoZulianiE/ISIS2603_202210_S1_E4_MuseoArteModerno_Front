import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pais } from './pais';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = environment.baseUrl + 'paises';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    console.log(this.http.get<Pais[]>(this.apiUrl));
    return this.http.get<Pais[]>(this.apiUrl);
  }

}
