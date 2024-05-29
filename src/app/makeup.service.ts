import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iMakeup } from './interfaces/makeup';

@Injectable({
  providedIn: 'root',
})
export class MakeupService {
  apiUrl: string = 'http://localhost:3000/makeUp';

  constructor(private http: HttpClient) {}

  getAll(): Observable<iMakeup[]> {
    return this.http.get<iMakeup[]>(this.apiUrl);
  }

  getById(id: number): Observable<iMakeup> {
    return this.http.get<iMakeup>(`${this.apiUrl}/${id}`);
  }
}
