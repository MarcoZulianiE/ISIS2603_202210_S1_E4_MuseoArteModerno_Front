import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MuseoDetail } from './museo-detail';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  private apiUrl: string = environment.baseUrl + 'Museos';

  constructor(private http: HttpClient) { }

  getMuseos(): Observable<MuseoDetail[]>{
    return this.http.get<MuseoDetail[]>(this.apiUrl);
  }

  getMuseo(id : string): Observable<MuseoDetail> {
    return this.http.get<MuseoDetail>(this.apiUrl + "/" + id);
  }



}
