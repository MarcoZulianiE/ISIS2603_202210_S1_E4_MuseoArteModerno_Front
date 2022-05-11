import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaisDetail } from './pais-detail';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = environment.baseUrl + 'paises';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<PaisDetail[]> {
    return this.http.get<PaisDetail[]>(this.apiUrl);
  }

}
