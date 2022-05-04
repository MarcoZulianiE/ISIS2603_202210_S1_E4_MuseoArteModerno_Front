import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MuseoDetail } from './museo-detail';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  private apiUrl = environment.baseUrl + 'museo';

  constructor(private http: HttpClient) { }

  getMuseos(): Observable<MuseoDetail[]>{
    return this.http.get<MuseoDetail[]>(this.apiUrl);
  }



}
