import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  getAboutMe(): Observable<AboutMe> {
    return of({
      name: 'Pädi',
      imagePath: '/me.jpg' // liegt im public Ordner
    });
  }

  updateAboutMe(name: string): Observable<void> {
    // hier könntest du später ein API PUT machen
    return of();
  }
}
