import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  get_cvs(): Cv[] {
    return [
      new Cv('Nasa', 2000, 2004),
      new Cv('FBI', 2004, 2010),
      new Cv('CIA', 2010, 2023),
      new Cv('Eutima', 2024),
    ]
  } 
  
  constructor(
    private http: HttpClient
  ) { }

  getCVs(): Observable<Cv[]> {
    return this.http.get<Cv[]>('/api/cv/');
  }

  getCV(id: string): Observable<Cv> {
    return this.http.get<Cv>(`/api/cv/${id}`);
  }

  createCV(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(`/api/cv/`, cv);
  }

  updateCV(id: string, cv: Cv): Observable<Cv> {
    return this.http.put<Cv>(`/api/cv/${id}/`, cv);
  }

  deleteCV(id: string): Observable<void> {
    return this.http.delete<void>(`/api/cv/${id}/`);
  }
}
